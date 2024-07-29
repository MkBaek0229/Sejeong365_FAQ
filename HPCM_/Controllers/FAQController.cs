using Microsoft.AspNetCore.Mvc;

namespace HPCM_.Controllers
{
    public class FAQController : Controller
    {
        // 기본 인덱스 액션 (FAQDiv003)
        public IActionResult Index()
        {
            return RedirectToAction("FAQDiv003");
        }

        // 각 FAQDiv에 대한 액션
        public IActionResult FAQDiv001()
        {
            return View();
        }

        public IActionResult FAQDiv002()
        {
            return View();
        }

        public IActionResult FAQDiv003()
        {
            return View();
        }

        public IActionResult FAQDiv004()
        {
            return View();
        }

        public IActionResult FAQDiv006()
        {
            return View();
        }

        // 에러 페이지
        public IActionResult Error()
        {
            return View();
        }
    }
}
