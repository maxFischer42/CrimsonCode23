namespace CrimsonCode23;
using Microsoft.Data.Sqlite;

class Util {
	public static T GetOrDefault<T>(SqliteDataReader reader, String key, T defaultVal) {
		var ordinal = reader.GetOrdinal(key);
		if(reader.IsDBNull(ordinal)) {
			return defaultVal;
		}
		else {
			return reader.GetFieldValue<T>(ordinal);
		}
	}
}