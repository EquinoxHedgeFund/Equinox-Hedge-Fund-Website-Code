export const metrics = {
  cumulativeReturn: { label: '累计收益率', value: '+15.2%', status: 'positive' },
  annualReturn: { label: '年化收益率 (ANR)', value: '20%', status: 'target', display: 'ANR 目标' },
  sharpeRatio: { label: '夏普比率 (SR)', value: '2.0', status: 'target', display: 'SR 目标' },
  maxDrawdown: { label: '最大回撤 (MDD)', value: '<10%', status: 'target', display: 'MDD 限制' },
}

export const navHistory = [
  { month: '2026-01', nav: 1.000, monthlyReturn: 0, cumulativeReturn: 0 },
  { month: '2026-02', nav: 1.032, monthlyReturn: 3.2, cumulativeReturn: 3.2 },
  { month: '2026-03', nav: 1.058, monthlyReturn: 2.5, cumulativeReturn: 5.8 },
  { month: '2026-04', nav: 1.152, monthlyReturn: 8.9, cumulativeReturn: 15.2 },
]

export const monthlyUpdates = [
  { month: '2026年4月', nav: '1.152', comment: '加密量化策略表现突出，资金费率套利贡献主要 Alpha。宏观 ETF 仓位维持中性偏多。' },
  { month: '2026年3月', nav: '1.058', comment: '黄金 ETF 配置贡献正收益，利率敏感型资产承压。整体组合波动率控制在目标范围内。' },
  { month: '2026年2月', nav: '1.032', comment: '策略上线首月，系统化执行流程验证通过，各项风控指标运行正常。' },
]
