namespace CrimsonCode23;
using Microsoft.Data.Sqlite;

public class BusinessPage {
    public int id { get; set; }
    public String? name { get; set; }
    public String? banner { get; set; }
    public String? logo { get; set; }
    public String? categoryId { get; set; }
    public String? price_tier { get; set; }
    public String? description { get; set; }
    public String? category { get; set; }
    public String? address { get; set; }
    public String? about_us { get; set; }
    public String? products { get; set; }
    public String? is_claimed { get; set; }
    public double latitude { get; set; }
    public double longitude { get; set; }
	
	static public BusinessPage FromSqlReader(SqliteDataReader reader) => new BusinessPage {
		id          = Util.GetOrDefault<int>(reader, "id", -1),
		name        = Util.GetOrDefault<String>(reader, "name", ""),
		banner      = Util.GetOrDefault<String>(reader, "bannerURL", ""),
		logo        = Util.GetOrDefault<String>(reader, "logoURL", ""),
		categoryId  = Util.GetOrDefault<String>(reader, "categoryId", ""),
		price_tier  = Util.GetOrDefault<String>(reader, "priceTier", ""),
		description = Util.GetOrDefault<String>(reader, "description", ""),
		category    = Util.GetOrDefault<String>(reader, "category", ""),
		address     = Util.GetOrDefault<String>(reader, "address", ""),
		about_us    = Util.GetOrDefault<String>(reader, "aboutUsText", ""),
		products    = Util.GetOrDefault<String>(reader, "productsText", ""),
		is_claimed  = Util.GetOrDefault<String>(reader, "claimed", ""),
		latitude    = Util.GetOrDefault<double>(reader, "latitude", 0.0),
		longitude   = Util.GetOrDefault<double>(reader, "longitude", 0.0),
	};
}