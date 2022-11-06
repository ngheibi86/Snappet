using SnappetChallengAPI.Model;

namespace SnappetChallengAPI.Controllers
{
    public interface IAssessmentController
    {
        List<StatisticalReport> GetStatisticalReport();
    }
}