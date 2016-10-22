#import "SpeechRecognizerManager.h"


@implementation SpeechRecognizerManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(supportedLocales:(RCTResponseSenderBlock)callback)
{
  NSSet<NSLocale *> *localeSet = [SFSpeechRecognizer supportedLocales];
  NSMutableArray *locales = [[NSMutableArray alloc] init];
  
  [localeSet.allObjects enumerateObjectsUsingBlock:^(id object, NSUInteger idx, BOOL *stop) {
    NSLocale *locale = (NSLocale *) object;
    [locales addObject: [locale localeIdentifier]];
  }];
  
  //TODO return object
  callback(@[[NSNull null], locales]);
}

@end
