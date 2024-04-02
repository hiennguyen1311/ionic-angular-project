/**
 * Copyright (c) 2023 Robin Genz
 */
package io.ionic.starter;

import com.google.mlkit.vision.barcode.common.Barcode;
import java.util.List;

public interface ReadBarcodesFromImageResultCallback {
    void success(List<Barcode> barcodes);
    void error(Exception exception);
}
