/**
 * Copyright (c) 2023 Robin Genz
 */
package io.ionic.starter;

public interface StartScanResultCallback {
    void success();
    void error(Exception exception);
}
