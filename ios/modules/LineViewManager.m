#import <React/RCTViewManager.h>
#import "BusinessIntelligence-Swift.h"

@interface LineViewManager: RCTViewManager
@end

@implementation LineViewManager
RCT_EXPORT_MODULE()

- (UIView *) view {
  LineView *view = [[LineView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
