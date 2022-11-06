using Microsoft.AspNetCore.Mvc;
using SnappetChallengAPI.Model;
using SnappetChallengAPI.Service;

namespace SnappetChallengAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentController : Controller, IAssessmentController
    {

        private readonly StatisticalReportService _statisticalReportService;
        public AssessmentController(StatisticalReportService statisticalReportService)
        {
            _statisticalReportService = statisticalReportService;
        }

        [HttpGet]
        public List<StatisticalReport> GetStatisticalReport()
        {
            var from = new DateTime(2015, 03, 24, 00, 00, 00);
            var to = new DateTime(2015, 03, 24, 11, 30, 00);
            return _statisticalReportService.GetStatisticalReportService(from, to);
        }
    }
}
