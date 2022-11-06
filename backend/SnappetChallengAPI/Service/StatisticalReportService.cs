using SnappetChallengAPI.Model;
using SnappetChallengAPI.Repository;

namespace SnappetChallengAPI.Service
{
    public class StatisticalReportService
    {
        private readonly AssessmentRepository _assessmentRepository;
        public StatisticalReportService(AssessmentRepository assessmentRepository)
        {
            _assessmentRepository = assessmentRepository;
        }
        public List<StatisticalReport> GetStatisticalReportService(DateTime from, DateTime to)
        {
            try
            {
                var assessments = _assessmentRepository.LoadAssessments();
                var results = assessments.GroupBy(p => p.Subject,

             (key, value) => new
             {
                 sub = key,
                 newlist = value.ToList()
             .Where(x => x.SubmitDateTime >= from & x.SubmitDateTime <= to)
             });

                List<StatisticalReport> assessmentLst = new List<StatisticalReport>();

                foreach (var gitem in results)
                {
                    assessmentLst.Add(new StatisticalReport
                    {
                        Subject = gitem.sub,
                        PassCount = gitem.newlist.Where(a => a.Correct == 1).Count(),
                        FailCount = gitem.newlist.Where(a => a.Correct == 0).Count()
                    });

                }

                return assessmentLst;

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
