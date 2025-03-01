package epicer.backend.utils

import org.mindrot.jbcrypt.BCrypt

fun hashPassword(password: String): String = BCrypt.hashpw(password, BCrypt.gensalt())