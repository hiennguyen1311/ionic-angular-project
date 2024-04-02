/**
 * Copyright (c) 2023 Robin Genz
 */
package io.ionic.starter;

import com.google.mlkit.vision.barcode.common.Barcode;

public interface ScanResultCallback {
    void success(Barcode barcode);
    void cancel();
    void error(Exception exception);
}
