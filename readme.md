# unicode-database-parser
Parses individual lines from http://unicode.org/Public/UNIDATA/UnicodeData.txt

## Why
The unicode database is not very easy to work with in raw form.

## How
Opinionated rip of property names and abbreviations from http://www.unicode.org/reports/tr44 into defs.json. As far as I can tell, there is no completely programmatic way of getting all the information needed to fully inflate a character definition from UnicodeData.txt.

## Releases
* 2.x
  * Expose the entire block data instead of just its name

## License
WTFPL
