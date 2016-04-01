// This script contains the functions that make Dwight K. Ipsum work

/* Here, you'll find the following functions:
 *
 *    get_query_parameter(name) => Returns the value of query parameter "name"
 *    get_num_paragraphs_or_default() => Returns num_paragraphs, or default
 *    clear_quote_box() => Replaces #quotes div with nothing
 *    clear_textbox(textbox) => Removes contents of num_paragraphs textbox
 *    restore_textbox(textbox) => Restores previous value of num_paragraphs textbox
 *    autofocus_on_textbox(textbox) => Self-explanatory
 *    select_text(container_id) => Used to select the text within element
 *    append_quote(index) => Adds quotes from quotes array to #quotes div
 *    append_sfw_quote(index) => Same, but uses var quotes_sfw
 *    is_sfw(quotes_array) => Checks if user requested work-safe quotes
 *    run_quotes_loop(quotes_array, num_paragraphs) => Generates quotes
 *    return_error_message() => Returns error message if exists, false if not
 *    display_error_message(num_paragraphs) => Error handling
 *    load_quotes(num_paragraphs, sfw) => Adds quotes to #quotes div
 *    update_quote_box() => Loads quotes based on user input
 *    update_quote_box_sfw() => Same, but uses var quotes_sfw
 *    run_load_scripts() => Performs various actions when the page loads
 *
 * Along with some jQuery for the really hard stuff:
 *    
 *    18. Prevent page refresh on return 
 *
 */

function get_query_parameter(name)
// Returns the value of query parameter "name"
{
   name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

   var regex = "[\\?&]" + name + "=([^&#]*)";
   var the_regex = new RegExp(regex);
   var results = the_regex.exec(window.location.search);

   if(results == null)
   {
      return "";
   }
   else
   {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
   }
}

function get_num_paragraphs_or_default()
// Returns num_paragraphs. If input does not have another value, it uses the query parameter. If there's no query parameter, it defaults to 3.
{
   var input_val = document.forms["update_quotes"]["num_paragraphs"].value;

   if (input_val != '')
   {
      return input_val;
   }
   else
   {
      query_val = get_query_parameter('num_paragraphs');
      
      if (query_val != '')
      {
         return query_val;
      }
      else
      {
         return 3;
      }
   }
}

function clear_quote_box()
// Replaces #quotes div with nothing
{
   document.getElementById("quotes").innerHTML = "";
}

function clear_textbox(textbox)
// Removes contents of num_paragraphs textbox
{
   if (textbox.value == get_num_paragraphs_or_default()) 
   { 
      textbox.value = '';
   }
}

function restore_textbox(textbox)
// Restores previous/default value of num_paragraphs textbox
{
   if (textbox.value == '')
   {
      textbox.value = get_num_paragraphs_or_default();
   }
}

function autofocus_on_textbox(textbox)
// Shifts focus to textbox
{
   document.getElementById(textbox).focus();
}

function select_text(container_id)
// Used to select the text within element based on id parameter
{
   if (document.selection)
   {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(container_id));
      range.select();
   }
   else if (window.getSelection)
   {
      var range = document.createRange();
      range.selectNode(document.getElementById(container_id));
      window.getSelection().addRange(range);
   } 
}

function disable_dragging_for(element) {
   element.draggable = false;
   element.onmousedown = function(event) {
      event.preventDefault();
      return false;
   };
}

function append_quote(index)
// Adds quotes from quotes array to #quotes div, based on parameter => index in array
{
   var quote = "<p>" + quotes[index] + "</p>";
   document.getElementById("quotes").innerHTML += quote;
}

function append_sfw_quote(index)
// Identical to append_quote(), but accesses quotes_sfw array object
{
   var quote = "<p>" + quotes_sfw[index] + "</p>";
   document.getElementById("quotes").innerHTML += quote;
}

function is_sfw(quotes_array)
// Checks if user requested work-safe quotes.
{
   return quotes_array == quotes_sfw;
}

function convert_html_to_plaintext(variable)
// Converts HTML stored in variables to plaintext to load in textarea
{
   if (variable instanceof Array)
   {
      var textvar = new Array();

      for (i = 0; i < htmlvar.length; i++)
      {
         textvar[i] = variable[i];
         textvar = textvar.replace(/(\r\n|\n|\r)/gm, "");
         textvar = textvar.replace(/<\/p>/g, "\n\n");
         textvar = textvar.replace(/<\/?(p|strong)>/gi, "");
      }
   }
   else 
   {
      var textvar = variable;
      textvar = textvar.replace(/(\r\n|\n|\r)/gm, ""); 
      textvar = textvar.replace(/<\/p>/g, "\n\n");
      textvar = textvar.replace(/<\/?(p|strong)>/gi, "");
   }
   return textvar;
}

function run_quotes_loop(quotes_array, num_paragraphs)
// Runs for loop that generates the quotes, based on quotes array parameter (either quotes or quotes_sfw) and the number of paragraphs requested
{
   for (var i = 0; i < num_paragraphs; i++)
   {
      var index = i % quotes_array.length;

      if (!is_sfw(quotes_array))
      {
         append_quote(index);
      }
      else
      {
         append_sfw_quote(index);
      }
   }
}

function return_error_message()
// Returns error message if exists, false if not
{
   var num_paragraphs = get_num_paragraphs_or_default();

   if (isNaN(num_paragraphs))
   {
      return "error_not_number";
   }
   else if (num_paragraphs < 1 || num_paragraphs > 50)
   {
      return "error_out_of_range";
   }
   else
   {
      return false;
   }
}

function display_error_message(num_paragraphs)
// Displays error messages based on the inputed number of paragraphs
{
   var error = return_error_message();

   if (error == "error_not_number")
   {
      var message = error_not_number;
   }
   else if (error == "error_out_of_range")
   {
      var message = error_out_of_range;
   }
   else
   {
      return;
   }
   document.getElementById("quotes").innerHTML += message;
}

function randomize_order()
{
   return Math.round(Math.random()) - 0.5;
}

function load_quotes(num_paragraphs, sfw)
// Replaces contents of #quotes div with the appropriate number of paragraphs
{   
   clear_quote_box();

   if (!isNaN(num_paragraphs) && num_paragraphs > 0 && num_paragraphs < 51)
   {
      var quotes_array = quotes.sort(randomize_order);

      if (sfw != null)
      {
         quotes_array = quotes_sfw.sort(randomize_order);
      }
      
      run_quotes_loop(quotes_array, num_paragraphs);
      select_text('quotes');
      return;
    }
    display_error_message(num_paragraphs);
}

function update_quote_box()
// Loads quotes in #quotes div based on user input
{
   var num_paragraphs = document.forms["update_quotes"]["num_paragraphs"].value;
   load_quotes(num_paragraphs);
}

function update_quote_box_sfw()
// Identical to update_quote_box(), but limited to work-safe quotes
{
   var num_paragraphs = document.forms["update_quotes"]["num_paragraphs"].value;
   load_quotes(num_paragraphs, true);
}

function run_load_scripts()
// Performs various actions when the page loads
{
   disable_dragging_for(document.getElementById("quotes"));

   var num_paragraphs = get_query_parameter("num_paragraphs");
   
   if (num_paragraphs != '')
   {
      var textbox = document.getElementById('num_paragraphs');

      load_quotes(num_paragraphs);
      restore_textbox(textbox);
      return;
   }
   else
   {
      clear_quote_box();
      document.getElementById("quotes").innerHTML += intro_content;
   }
   autofocus_on_textbox('num_paragraphs');
}

// Prevent page refresh on return

$(document).ready(function() {
  $(window).keydown(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      update_quote_box();

      if (return_error_message() == false)
      {
         $('#num_paragraphs').blur();
         select_text('quotes');
      }
      else
      {
         autofocus_on_textbox("num_paragraphs");
      }

      return false;
    }
  });
});
