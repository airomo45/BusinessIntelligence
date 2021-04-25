import UIKit
import Charts

class LineView: UIView {
  var lineChartView = LineChartView()
  @objc var xValues: [String] = []
  @objc var yValues: [Double] = []

  override public func layoutSubviews() {
    super.layoutSubviews()
    let frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
    lineChartView.frame = frame

    self.initChart()
  }

  private func initChart() {
    var dataEntries: [ChartDataEntry] = []

    for i in 0..<yValues.count {
      let dataEntry = ChartDataEntry(x: Double(i), y: yValues[i])
      dataEntries.append(dataEntry)
    }

    let chartDataSet = LineChartDataSet(entries: dataEntries, label: "Per 100,000 US Dollars")
    chartDataSet.setColor(UIColor.systemBlue)
    chartDataSet.drawFilledEnabled = true

    let chartData = LineChartData(dataSet: chartDataSet)
    lineChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues)
    lineChartView.data = chartData
    lineChartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    lineChartView.xAxis.drawGridLinesEnabled = false
    lineChartView.xAxis.granularity = 1
    lineChartView.xAxis.labelWidth = 1


    self.addSubview(lineChartView)
  }
}
