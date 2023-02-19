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
					description VARCHAR(50) NOT NULL,
					latitude DOUBLE NULL,
					longitude DOUBLE NULL,
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
		FillDummyValues();
	}

	static private void FillDummyValues() {
		var command = Db.CreateCommand();
		command.CommandText = 
			@"
				INSERT INTO Business (name, categoryId, description, 
									  latitude, longitude, priceTier, 
									  claimed, logoURL, bannerURL, 
									  aboutUsText, productsText)
				VALUES
					(
						'SugarSquares', 'food', 'Waffle Restaurant',
						100.0, 200.0, 3, false,
						'',
						'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Classic-Waffles-0ae28b2.jpg?quality=90&resize=556,505',
						'We make waffles! Established in 1607.',
						'Waffles\nOther products'
					),
					(
						'Jam Out', 'food', 'Jam Store',
						100.0, 300.0, 2, true,
						'https://i5.walmartimages.com/asr/96cf04da-5729-4b16-93cc-5bb83c562aca_1.bb7009fd6af969962551919a1e641f20.jpeg',
						'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Classic-Waffles-0ae28b2.jpg?quality=90&resize=556,505',
						'We also sell mayonaise',
						'- Jam\n- Jelly\n- Mayonaise'
					),
					(
						'SugarSquares 2', 'food', 'Waffle Restaurant',
						100.0, 200.0, 3, false,
						'',
						'https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Classic-Waffles-0ae28b2.jpg?quality=90&resize=556,505',
						'Sequel to Sugar Squares',
						'Waffles\nOther products'
					);
			";
			
		command.ExecuteReader();
	}
}