<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gforms');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[I0+Wu*w=ixt([.6Gr[ZHuw4H$Oyy/pI5a_:2jZ_G_$wb<|*f:&VbJ`DyI{r;Wcy');
define('SECURE_AUTH_KEY',  'j`0b6#0+Eg87X6R$m>+`6EyH;PlHoJk=N,:?@+Yb><v+Itz|D ;~&/g{8nHcL+|-');
define('LOGGED_IN_KEY',    '5&1}Z)$Y%#d<lg(Y:?p6|!O6]MT+:_N)M8(}<*imi*BSNVjp7I3N-[^.Ds*g;]dH');
define('NONCE_KEY',        ',6:>k*2r]*xqgOWge<dz+uD{}E`> y^o,Q<RugE-,Q(Zp:Nj1!g[z5O 06:L^;u$');
define('AUTH_SALT',        '4CA70/a+h>gK;+>=2nD$WTODz<`EY;i#nGM<tXcX=dh/Yy C]%E[ot{yvK @f57u');
define('SECURE_AUTH_SALT', '&.Dp?^EXR`J( W0dv#y<[:3:TtIDM<{Gw*${SA<fym&;QxksY[0vbjk>)560hJ|I');
define('LOGGED_IN_SALT',   'SV(=knt4-1Q[M-ETjG:8+`tJ7+8NWCz1!,K22l+G3>wJVj2d(K9wcb[_(}C&;Tl$');
define('NONCE_SALT',       'etZBzzw[l.)Qrk_c%[%r!r@<XyhZqv!30<17H^zhghF=/&?vB~VO14/]kGT/<USF');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
