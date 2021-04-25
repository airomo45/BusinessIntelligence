import UIKit
import Charts

class BarView: UIView {
  var barChartView = BarChartView()
  @objc var xValues: [String] = []
  @objc var yValues: [Double] = []

  override public func layoutSubviews() {
    super.layoutSubviews()
    let frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
    barChartView.frame = frame

    self.initChart()
  }

  private func initChart() {
    var dataEntries: [BarChartDataEntry] = []

    for i in 0..<yValues.count {
      let dataEntry = BarChartDataEntry(x: Double(i), y: yValues[i])
      dataEntries.append(dataEntry)
    }

    let chartDataSet = BarChartDataSet(entries: dataEntries, label: "Per 100,000 US Dollars")
    chartDataSet.setColor(UIColor.systemBlue)
    let chartData = BarChartData(dataSet: chartDataSet)
    
    barChartView.xAxis.granularity = 1
    
//    barChartView.xAxis.labelRotationAngle = -90
    
    barChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues)
    barChartView.data = chartData
    barChartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    self.addSubview(barChartView)
  }
}
