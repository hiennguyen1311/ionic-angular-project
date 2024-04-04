//
//  MLKitPlugin.m
//  App
//
//  Created by Thinh Ngo on 03/04/2024.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MLKitPlugin, "MLKitPlugin",
    CAP_PLUGIN_METHOD(analyze, CAPPluginReturnPromise);
)
