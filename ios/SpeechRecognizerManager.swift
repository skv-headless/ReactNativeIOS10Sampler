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
  
  @objc(requestAuthorization:)
  func requestAuthorization(callback: @escaping RCTResponseSenderBlock) -> Void {

    SFSpeechRecognizer.requestAuthorization { authStatus in
      /*
       The callback may not be called on the main thread. Add an
       operation to the main queue to update the record button's state.
       */
      OperationQueue.main.addOperation {
        switch authStatus {
        case .authorized:
          callback([[], "authorized"]);
        case .denied:
          callback([[], "denied"]);
        case .restricted:
          callback([[], "restricted"]);
        case .notDetermined:
          callback([[], "notDetermined"]);
        }
      }
    }
  }
}
