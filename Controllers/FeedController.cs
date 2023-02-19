using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

using CrimsonCode23;
namespace CrimsonCode23.Controllers;

[ApiController]
[Route("api")]
public class FeedController : Controller
{
    private readonly ILogger<FeedController> _logger;

    public FeedController(ILogger<FeedController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public ActionResult<int> Test()
    {
        return 5;
    }

    [HttpGet("get_categories")]
    public ActionResult<IEnumerable<Category>> GetCategories()
    {
        try {
            var command = BusinessDB.Db.CreateCommand();
            command.CommandText = "SELECT * FROM Category;";
            var reader = command.ExecuteReader();
            
            var list = new List<Category>();
            while(reader.Read()) {
                list.Add(Category.FromSqlReader(reader));
            }
		
            return list;
        } catch (Exception e) {
            return BadRequest(Json(new { status = "error", error = e.ToString() }));
        }
    }

    [HttpGet("get_cards/{query?}")]
    public ActionResult<IEnumerable<FeedCard>> GetCards(String? query)
    {
        try {
            var command = BusinessDB.Db.CreateCommand();
            command.CommandText = "SELECT id, name, bannerURL, categoryId, priceTier FROM Business";
            
            if(query != null && query != "") {
                command.CommandText += "WHERE Business.name LIKE $name";
                command.Parameters.AddWithValue("$name", query);
            }
                
            command.CommandText += ";";

            var reader = command.ExecuteReader();
            
            var list = new List<FeedCard>();
            while(reader.Read()) {
                list.Add(FeedCard.FromSqlReader(reader));
            }
		
            return list;
        } catch (Exception e) {
            return BadRequest(Json(new { status = "error", error = e.ToString() }));
        }
    }

    [HttpGet("get_cards_from_category/{categoryId}")]
    public ActionResult<IEnumerable<FeedCard>> GetCardsFromCategory(String categoryId)
    {
        try {
            var command = BusinessDB.Db.CreateCommand();
            command.CommandText = "SELECT id, name, bannerURL, categoryId, priceTier FROM Business WHERE Business.categoryId = $categoryId;";
            command.Parameters.AddWithValue("$categoryId", categoryId);
            
            var reader = command.ExecuteReader();
            
            var list = new List<FeedCard>();
            while(reader.Read()) {
                list.Add(FeedCard.FromSqlReader(reader));
            }
		
            return list;
        } catch (Exception e) {
            return BadRequest(Json(new { status = "error", error = e.ToString() }));
        }
    }

    [HttpGet("get_page/{id?}")]
    public ActionResult<IEnumerable<BusinessPage>> GetPage(int id)
    {
        try {
            var command = BusinessDB.Db.CreateCommand();
            command.CommandText = "SELECT * FROM Business WHERE Business.id = $id;";
            command.Parameters.AddWithValue("$id", id);
            
            command.CommandText += ";";

            var reader = command.ExecuteReader();
            
            var list = new List<BusinessPage>();
            while(reader.Read()) {
                list.Add(BusinessPage.FromSqlReader(reader));
            }
		
            return list;
        } catch (Exception e) {
            return BadRequest(Json(new { status = "error", error = e.ToString() }));
        }
    }
}
