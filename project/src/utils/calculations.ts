export const calculateResults = (
  adSpend: number,
  visitors: number,
  clickRate: number,
  conversionRate: number,
  averageOrderValue: number
) => {
  const totalClicks = visitors * (clickRate / 100);
  const totalConversions = totalClicks * (conversionRate / 100);
  const revenue = totalConversions * averageOrderValue;
  const roas = adSpend > 0 ? revenue / adSpend : 0;

  return { revenue, roas, totalClicks, totalConversions };
};
