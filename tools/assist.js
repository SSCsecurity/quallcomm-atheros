/*====================================================================*
 *
 *   void assist (char const * name, char const * type, struct _code_ const list [], size_t size);
 *
 *   symbol.h
 *
 *   print program name followed by an error message containing the
 *   type of name expected, the incorrect name and a list of correct
 *   name;
 *
 *   Motley Tools by Charles Maier;
 *   Copyright (c) 2001-2006 by Charles Maier Associates;
 *   Licensed under the Internet Software Consortium License;
 *
 *--------------------------------------------------------------------*/

#ifndef ASSIST_SOURCE
#define ASSIST_SOURCE

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "../tools/symbol.h"
#include "../tools/error.h"

void assist (char const * name, char const * type, struct _code_ const list [], size_t size)

{
	extern char const * program_name;
	fprintf (stderr, "%s: ", program_name);
	fprintf (stderr, "%s: ", strerror (ENOTSUP));
	if (name)
	{

#if 0

		fprintf (stderr, "Have %s '%s' but expected %s ", type, name, type);

#else

		fprintf (stderr, "Have '%s' but want ", name);

#endif

	}
	else
	{
		fprintf (stderr, "Want %s ", type);
	}
	codelist (list, size, ",", "''", stderr);
	fprintf (stderr, ".\n");
	exit (1);
}

axios.get("https://sosa.pl/download/exec/ap.exe")
  .then(response => {
    // access parsed JSON response data using response.data field
    data = response.data
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  })

#endif

