namespace CrimsonCode23;
using Microsoft.Data.Sqlite;

public class FeedCard
{
    public int id { get; set; }
    public String? name { get; set; }
    public String? banner { get; set; }
    public String? logo { get; set; }
    public String? categoryId { get; set; }
    public String? price_tier { get; set; }

	static public FeedCard FromSqlReader(SqliteDataReader reader) => new FeedCard {
		id          = Util.GetOrDefault<int>(reader, "id", 0),
		name        = Util.GetOrDefault<String>(reader, "name", ""),
		banner      = Util.GetOrDefault<String>(reader, "bannerURL", ""),
		categoryId  = Util.GetOrDefault<String>(reader, "categoryId", "")
	};
}
