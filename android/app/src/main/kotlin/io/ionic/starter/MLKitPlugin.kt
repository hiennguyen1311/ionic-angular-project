package io.ionic.starter;

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.provider.MediaStore
import android.util.Base64
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions


@CapacitorPlugin(name = "MLKitPlugin")
class MLKitPlugin: Plugin() {
  val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);

  fun getMediaAbsolutePath(uri: Uri?): String {
    val filePathColumn = arrayOf(MediaStore.Images.Media.DATA)
    val cursor = context.contentResolver.query(uri!!, filePathColumn, null, null, null)
    if (cursor == null || cursor.count == 0) return "";
    cursor.moveToFirst()
    val columnIndex = cursor.getColumnIndex(filePathColumn[0])
    val picturePath = cursor.getString(columnIndex)
    cursor.close()
    return picturePath
  }

  fun getBitmap(imageUri: String?, reqHeight: Int, reqWidth: Int): Bitmap {
    val options = BitmapFactory.Options()
    options.inJustDecodeBounds = true // w  w  w. j av  a2 s.  c  o  m
    val imagePath: String? = getMediaAbsolutePath(Uri.parse(imageUri));
    var bitmap = BitmapFactory.decodeFile(imagePath, options)
    val height = options.outHeight
    val width = options.outWidth
    var inSampleSize = 1
    if (height > reqHeight || width > reqWidth) {
      inSampleSize = if (width > height) {
        Math.round(height.toFloat() / reqHeight.toFloat())
      } else {
        Math.round(width.toFloat() / reqWidth.toFloat())
      }
    }
    options.inJustDecodeBounds = false
    options.inSampleSize = inSampleSize
    bitmap = BitmapFactory.decodeFile(imagePath, options)
    return bitmap
  }

  @PluginMethod
  fun init(call: PluginCall) {
    val value = call.getString("value")
    val ret = JSObject()
    ret.put("value", value)
    call.resolve(ret)
  }

  @PluginMethod
  fun analyze(call: PluginCall) {
    try {
      val image = call.getString("image");
      //val bitmap = getBitmap(image, 200, 200 );
      val decodedString: ByteArray = Base64.decode(image, Base64.DEFAULT)
      val bitmap = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.size)
      val inputImage = InputImage.fromBitmap(bitmap, 0);
      recognizer.process(inputImage)
        .addOnSuccessListener { result ->
          val ret = JSObject()
          val resultText = result.text
          val finalText = listOf<String>();
          for (block in result.textBlocks) {
            val blockText = block.text
            val blockCornerPoints = block.cornerPoints
            val blockFrame = block.boundingBox
            for (line in block.lines) {
              val lineText = line.text
              val lineCornerPoints = line.cornerPoints
              val lineFrame = line.boundingBox
              for (element in line.elements) {
                val elementText = element.text
                val elementCornerPoints = element.cornerPoints
                val elementFrame = element.boundingBox
              }
            }
          }
          ret.put("data", result.text);
          call.resolve(ret);
        }
        .addOnFailureListener { e ->
          call.reject("Image can't be processed")
        }
      if(image?.length == 0 ) {
        call.reject("Image is invalid")
      }
    } catch (e:Error) {
      println("Error " + e.message)
    }
  }
}
