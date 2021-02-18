# for installing neo4j
# pip install neo4j
from neo4j import GraphDatabase
graphdb=GraphDatabase.driver(uri="bolt://localhost:7687",auth=("neo4j","nabeel"))

session=graphdb.session()

query="MATCH (a:Station {name:'A'}), (d:Station {name:'E'}) MATCH route = allShortestPaths((a)-[:stopat*]-(d)) RETURN NODES(route)"
nodes=session.run(query)
print(type(nodes))
print(nodes)

for i, res in enumerate(nodes):
    print('i', i)
    print(res)

# for rel in nodes:
#     #print(rel)  #<Record itinerary=['Station Liaquatabad 10 Number Bus Stop, Liaquatabad Town, Karachi, Pakistan', 'Bus W11', 'Station Ayesha Manzil Chowrangi, Shahrah-e-Pakistan, Block 7 Naseerabad Block 14 Gulberg Town, Karachi, Pakistan'] distance=3.9729355602028815>
# #    print(rel[1])
#     for result in rel[0]:
#         print(result)
#     print(rel[1])
#     # print(rel[2])
#     print("------------------------------")    
#         # for r in result:
#         #     print(r)
# # print(nodes)
# MATCH (a:Station {name:'A'}), (d:Station {name:'E'})
# match stops =   allShortestPaths((a)-[:next*]->(d))
# RETURN [x in NODES(stops)| case when x:Station then x.name else ''end] as rastay,
#  REDUCE(d = 0, x IN RELATIONSHIPS(stops) | d + x.Distance) AS distance







#/////////////////////

# for rel in nodes:
#     #print(rel)  #<Record itinerary=['Station Liaquatabad 10 Number Bus Stop, Liaquatabad Town, Karachi, Pakistan', 'Bus W11', 'Station Ayesha Manzil Chowrangi, Shahrah-e-Pakistan, Block 7 Naseerabad Block 14 Gulberg Town, Karachi, Pakistan'] distance=3.9729355602028815>
# #    print(rel[1])
#     for result in rel[0]:
#         print(result)
#     print(rel[1])
#     # print(rel[2])
#     print("------------------------------")    
#         # for r in result:
#         #     print(r)
# # print(nodes)























#q1="match (b:boy) return (b)"
#nodes=session.run(q1)
#for node in nodes:
 #   print(node)




# adding the node
#q2="create (n:boy{name:'nabeel',id:''})"
#nodes=session.run(q2)
#q3= "match (b:boy) where b.name='nabeel' set b.id=id(b)"
#node=session.run(q3)

# or 2nd way hay node create kro or id id sath assign krdo unique id

#q4="merge(n:boy{name:'asad',id:''}) set n.id=id(n)"
#nodes=session.run(q4)

# update kro node ki sari property
#q5="match(n:boy{name:'asad'}) set n.age=26"  # sari poroperty k le match(n:boy{name:'asad'}) set n={name:'abc',age{16}}

# q5="match(n:boy{name:'abc',age:16}) set n={name:'asad',age:26}" # but is say id chali gae q k pori property he badal gae hay
# nodes=session.run(q5)
# print(nodes)