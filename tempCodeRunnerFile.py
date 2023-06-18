query_string = input('Enter your query: ')
query_terms = [term.lower() for term in query_string.strip().split()]
print(query_terms)
calculate_sorted_order_of_documents(query_terms)