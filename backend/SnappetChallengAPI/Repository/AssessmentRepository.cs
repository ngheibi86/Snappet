using SnappetChallengAPI.Model;
using SnappetChallengAPI.Shared;
using System.Text.Json;

namespace SnappetChallengAPI.Repository
{
    public class AssessmentRepository
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        public AssessmentRepository(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public List<Assessment> LoadAssessments()
        {
            try
            {

                var rootPath = _hostingEnvironment.ContentRootPath;

                var fullPath = Path.Combine(rootPath, "Data/work.json");

                var jsonData = System.IO.File.ReadAllText(fullPath);

                if (string.IsNullOrWhiteSpace(jsonData)) return null;

                var options = new JsonSerializerOptions();
                options.Converters.Add(new CustomDateTimeConverter());

                return JsonSerializer.Deserialize<List<Assessment>>(jsonData, options);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
