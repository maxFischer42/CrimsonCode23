namespace CrimsonCode23;
using Microsoft.Data.Sqlite;

public class Category
{
    public String? id { get; set; }
    public String? name { get; set; }
    public String? url { get; set; }

	static public Category FromSqlReader(SqliteDataReader reader) => new Category {
		id          = Util.GetOrDefault<String>(reader, "categoryId", ""),
		name        = Util.GetOrDefault<String>(reader, "name", ""),
		url         = Util.GetOrDefault<String>(reader, "url", "")
	};
}
