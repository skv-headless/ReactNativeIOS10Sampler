#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(SpeechRecognizerManager, NSObject)

RCT_EXTERN_METHOD(supportedLocales:(RCTResponseSenderBlock *)callback)

@end
