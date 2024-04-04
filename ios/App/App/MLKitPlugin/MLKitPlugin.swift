//
//  MLKitPlugin.swift
//  App
//
//  Created by Thinh Ngo on 03/04/2024.
//

import Foundation
import Capacitor
import MLKit

@objc(MLKitPlugin)
public class MLKitPlugin: CAPPlugin {
    private lazy var textRecognizer = TextRecognizer.textRecognizer(options: TextRecognizerOptions())
    
    @objc func analyze(_ call: CAPPluginCall) {
        guard let imageBase64String = call.getString("image"),
              let imageData = Data.init(base64Encoded: imageBase64String, options: .init(rawValue: 0)),
              let image = UIImage(data: imageData)
        else {
            call.resolve(["data": "No Data"])
            return
        }
        processImage(image: image) { texts, error in
            guard error == nil, let texts = texts else {
                call.reject(error?.localizedDescription ?? "")
                return
            }
            call.resolve(["data": texts.text])
        }
    }
    
    private func processImage(image: UIImage, completionHandler: @escaping ((Text?, Error?) -> Void)) {
        let visionImage = VisionImage(image: image)
        visionImage.orientation = image.imageOrientation
        textRecognizer.process(visionImage) { (texts, error) in
            completionHandler(texts, error)
        }
    }
}

