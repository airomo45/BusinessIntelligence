#import <React/RCTViewManager.h>
#import "BusinessIntelligence-Swift.h"

@interface BarViewManager: RCTViewManager
@end

@implementation BarViewManager
RCT_EXPORT_MODULE()

- (UIView *) view {
  BarView *view = [[BarView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
