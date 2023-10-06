## Requirements

- ✅ Implement a text input form that displays a type-responsive list of suggestions based on the current input value.

- ✅ Fetch search results from the following API:

  - Base URL: https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev
  - HTTP method: `GET`
  - Endpoint: `/languages`
  - Query param: `keyword=`

- Enable keyboard navigation of suggestions list and highlight current item.

- ✅ Enable selection of suggested list items with the enter key or mouse clicks.

- Display a list of currently selected languages above the input form.

  - Configure a maximum display count for the selected languages, and remove oldest selected items if maximum is exceeded.
  - For redundant selections, remove the language from the list.

- ✅ Don't alter the stylesheet.

## Bonus Features

- ✅ Cache API responses.

- Delay sending out requests while typing.

- Retain previous state on reload.

- Highlight portions of suggestion entries that match the search query.
