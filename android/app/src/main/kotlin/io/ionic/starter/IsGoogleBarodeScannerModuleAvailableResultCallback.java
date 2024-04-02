package io.ionic.starter;

public interface IsGoogleBarodeScannerModuleAvailableResultCallback {
    void success(boolean isAvailable);
    void error(Exception exception);
}
