using Microsoft.Data.Sqlite;

public class BusinessDB {
	static private SqliteConnection? db;
	
	static public void Open() => Db.Open();
	
	static public SqliteConnection Db { 
		get {
			if(db == null) {
				var needsInit = false;
				if(!File.Exists("businesses.db")) needsInit = true;

				db = new SqliteConnection("Data Source=businesses.db;Mode=ReadWriteCreate");
				db.Open();
				
				if(needsInit) InitDb();
			}
			
			return db;
		}
	}

	static private void InitDb() {
		var command = Db.CreateCommand();
		command.CommandText = 
			@"
				CREATE TABLE IF NOT EXISTS Business (
					id INTEGER PRIMARY KEY AUTOINCREMENT,						
					name VARCHAR(30) NOT NULL,
					categoryId VARCHAR(20) NOT NULL,
					desc VARCHAR(50) NOT NULL,
					lat DOUBLE NULL,
					long DOUBLE NULL,
					priceTier INTEGER NOT NULL,
					claimed BOOL NOT NULL DEFAULT FALSE,
					opensTime TIME NULL,
					closesTime TIME NULL,
					
					logoURL TEXT NULL,
					bannerURL TEXT NULL,

					aboutUsText TEXT NULL,
					productsText TEXT NULL,
					
					CONSTRAINT category_name_fk FOREIGN KEY(categoryId) REFERENCES Category(categoryId)
				);
			
				CREATE TABLE Category (
					categoryId VARCHAR(20) PRIMARY KEY,
					name VARCHAR(20) NOT NULL,
					url  TEXT NULL
				);

				INSERT INTO Category (categoryId, name) VALUES
					('food', 'Food'),
					('music', 'Music'), 
					('groceries', 'Groceries'),
					('entertainment', 'Entertainment'),
					('hair', 'Hair'),
					('sports', 'Sports'),
					('hobby', 'Hobby'),
					('clothing', 'Clothing');
			";
			
		command.ExecuteReader();
	}
}