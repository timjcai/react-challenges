# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

team_data = [
  {
    'name': 'Atlanta Hawks',
    'slug': 'ATL',
    'arena': 'State Farm Arena',
    'conference': 'East',
    'winsandlosses': '41-41'
  },
  {
    'name': 'Boston Celtics',
    'slug': 'BOS',
    'arena': 'TD Garden',
    'conference': 'East',
    'winsandlosses': '57-25'
  },
  {
    'name': 'Brooklyn Nets',
    'slug': 'BRK',
    'arena': 'Barclays Center',
    'conference': 'East',
    'winsandlosses': '45-37'
  },
  {
    'name': 'Charlotte Hornets',
    'slug': 'CHO',
    'arena': 'Spectrum Center',
    'conference': 'East',
    'winsandlosses': '27-55'
  },
  {
    'name': 'Chicago Bulls',
    'slug': 'CHI',
    'arena': 'United Center',
    'conference': 'East',
    'winsandlosses': '40-42'
  },
  {
    'name': 'Cleveland Cavaliers',
    'slug': 'CLE',
    'arena': 'Rocket Mortgage FieldHouse',
    'conference': 'East',
    'winsandlosses': '51-31'
  },
  {
    'name': 'Dallas Mavericks',
    'slug': 'mavericks',
    'arena': 'American Airlines Center',
    'conference': 'West',
    'winsandlosses': '41-41'
  },
  {
    'name': 'Denver Nuggets',
    'slug': 'DEN',
    'arena': 'Ball Arena',
    'conference': 'West',
    'winsandlosses': '53-29'
  },
  {
    'name': 'Detroit Pistons',
    'slug': 'DET',
    'arena': 'Little Caesars Arena',
    'conference': 'East',
    'winsandlosses': '17-65'
  },
  {
    'name': 'Golden State Warriors',
    'slug': 'GSW',
    'arena': 'Chase Center',
    'conference': 'West',
    'winsandlosses': '44-38'
  },
  {
    'name': 'Houston Rockets',
    'slug': 'HOU',
    'arena': 'Toyota Center',
    'conference': 'West',
    'winsandlosses': '22-60'
  },
  {
    'name': 'Indiana Pacers',
    'slug': 'IND',
    'arena': 'Bankers Life Fieldhouse',
    'conference': 'West',
    'winsandlosses': '35-47'
  },
  {
    'name': 'Los Angeles Clippers',
    'slug': 'LAC',
    'arena': 'Crypto.com Arena',
    'conference': 'West',
    'winsandlosses': '44-38'
  },
  {
    'name': 'Los Angeles Lakers',
    'slug': 'LAL',
    'arena': 'Crypto.com Arena',
    'conference': 'West',
    'winsandlosses': '43-39'
  },
  {
    'name': 'Memphis Grizzlies',
    'slug': 'MEM',
    'arena': 'FedExForum',
    'conference': 'West',
    'winsandlosses': '51-31'
  },
  {
    'name': 'Miami Heat',
    'slug': 'MIA',
    'arena': 'AmericanAirlines Arena',
    'conference': 'East',
    'winsandlosses': '44-38'
  },
  {
    'name': 'Milwaukee Bucks',
    'slug': 'MIL',
    'arena': 'Fiserv Forum',
    'conference': 'East',
    'winsandlosses': '58-24'
  },
  {
    'name': 'Minnesota Timberwolves',
    'slug': 'MIN',
    'arena': 'Target Center',
    'conference': 'West',
    'winsandlosses': '42-40'
  },
  {
    'name': 'New Orleans Pelicans',
    'slug': 'NOP',
    'arena': 'Smoothie King Center',
    'conference': 'West',
    'winsandlosses': '42-40'
  },
  {
    'name': 'New York Knicks',
    'slug': 'NYK',
    'arena': 'Madison Square Garden',
    'conference': 'East',
    'winsandlosses': '47-35'
  },
  {
    'name': 'Oklahoma City Thunder',
    'slug': 'OKC',
    'arena': 'Paycom Center',
    'conference': 'West',
    'winsandlosses': '40-42'
  },
  {
    'name': 'Orlando Magic',
    'slug': 'ORL',
    'arena': 'Amway Center',
    'conference': 'East',
    'winsandlosses': '35-47'
  },
  {
    'name': 'Philadelphia 76ers',
    'slug': 'PHI',
    'arena': 'Wells Fargo Center',
    'conference': 'East',
    'winsandlosses': '54-28'
  },
  {
    'name': 'Phoenix Suns',
    'slug': 'PHO',
    'arena': 'Footprint Center',
    'conference': 'West',
    'winsandlosses': '45-37'
  },
  {
    'name': 'Portland Trail Blazers',
    'slug': 'blazers',
    'arena': 'Moda Center',
    'conference': 'West',
    'winsandlosses': '33-49'
  },
  {
    'name': 'Sacramento Kings',
    'slug': 'SAC',
    'arena': 'Golden 1 Center',
    'conference': 'West',
    'winsandlosses': '48-34'
  },
  {
    'name': 'San Antonio Spurs',
    'slug': 'SAS',
    'arena': 'AT&T Center',
    'conference': 'West',
    'winsandlosses': '22-60'
  },
  {
    'name': 'Toronto Raptors',
    'slug': 'TOR',
    'arena': 'Scotiabank Arena',
    'conference': 'East',
    'winsandlosses': '41-41'
  },
  {
    'name': 'Utah Jazz',
    'slug': 'jazz',
    'arena': 'Vivint Arena',
    'conference': 'West',
    'winsandlosses': '37-45'
  },
  {
    'name': 'Washington Wizards',
    'slug': 'wizards',
    'arena': 'Capital One Arena',
    'conference': 'East',
    'winsandlosses': '35-47'
  }
]

def create_teams(array)
  array.each do |team|
    p Team.create(name: team[:name], slug: team[:slug], arena: team[:arena], conference: team[:conference], winsandlosses: team[:winsandlosses])
  end
end

create_teams(team_data)
