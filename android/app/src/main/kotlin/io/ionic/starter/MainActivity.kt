package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;


public class MainActivity: BridgeActivity() {
  public override fun onCreate(savedInstanceState: Bundle?) {
    registerPlugin(MLKitPlugin::class.java);
    registerPlugin(BarcodeScannerPlugin::class.java);
    super.onCreate(savedInstanceState);
  }
}
