from neo4j import GraphDatabase
graphdb=GraphDatabase.driver(uri="bolt://localhost:7687",auth=("neo4j","nabeel"))

session=graphdb.session()

# query="MATCH (a:Station {name:'A'}), (d:Station {name:'E'}) MATCH route = allShortestPaths((a)-[:stopat*]-(d)) RETURN route"
query = "MATCH (a:Station {name:'A'}), (d:Station {name:'D'}) MATCH route = allShortestPaths((a)-[:stopat*]-(d)), stops = allShortestPaths((a)-[:next*]->(d)) RETURN Nodes(route), relationships(stops)"
nodes=session.run(query)
print(type(nodes))
print(nodes)

for i, res in enumerate(nodes):
    print('i', i)
    print(res)
    # print(res['rel'])
