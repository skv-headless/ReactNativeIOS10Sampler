import Foundation
import Speech


@objc(SpeechRecognizerManager)
class SpeechRecognizerManager: NSObject {
  
  @objc(supportedLocales:)
  func supportedLocales(callback: RCTResponseSenderBlock) -> Void {
    let locales = SFSpeechRecognizer.supportedLocales().map({locale in
      return locale.identifier;
    })
    
    callback([[], locales]);
  }
  
}
