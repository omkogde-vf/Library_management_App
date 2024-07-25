json.array! @books do |book|
  json.id book.id
  json.title book.title
  json.author book.author
  json.description book.description
  json.publicationDate book.publication_date
  json.created_at book.created_at
  json.updated_at book.updated_at
end
