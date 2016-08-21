<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'alexmori_afc');

/** MySQL database username */
define('DB_USER', 'alexmori_afc');

/** MySQL database password */
define('DB_PASSWORD', 'EC0DB972k5m4i1hqx8y6b3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'SJB=pm kfuRV<dHm(qyr&`)|618oTZ<)d-d+AVPzT,wBymYp gEOlp(@Yy8AuT^K');
define('SECURE_AUTH_KEY',  'sA*UPUQ01TM~~#nuA3ta=>0w9RCp9=l+Kc9kOhtO1os-Xq62.^(?{Wr8PS?ZLp>~');
define('LOGGED_IN_KEY',    'THycgnC|}9PM3_7erCeLeZV|31G{%.M[B+r-/#]5dc/C+DFOyYu4kcT+Oi6xJ9}R');
define('NONCE_KEY',        'ZP.6U<A4joB)p,Bg^dwU/!ef2a4JK-MB;k)3k/&3z6*u#!KB+ilQs;|o0%zdgsOG');
define('AUTH_SALT',        'Qd|Aq#WFo/nDrvgwqZ!HsFz_y,<HoZ~|t:<p!x~Ak[08a!QW|yB`39hY-{;#.IEc');
define('SECURE_AUTH_SALT', '?20-.#d!c?q80^mIDr[Yy$j.<?NTk4?[m>XD*0]-`R/oX+Ai_4tpN~nA{}%|-!|p');
define('LOGGED_IN_SALT',   'gE_qfUd|:Eg,H}sDtFfIfLvig[`-Ip}8j:S|N39fb|i-k._`T<j(@%k,cw]o3cOb');
define('NONCE_SALT',       '2JDrH?F5)i~NVD5:jw!}3|>sl4c>3|vjws39C#,bC<9OBc,!T/N1Hp}4=J^#cq=N');


$table_prefix = 'afc_';


define('WP_SITEURL', 'http://www.alexmorishita.com');


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
