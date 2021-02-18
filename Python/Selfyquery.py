from neo4j import GraphDatabase
graphdb=GraphDatabase.driver(uri="bolt://localhost:7687",auth=("neo4j","nabeel"))

session=graphdb.session()
query = "MATCH (a:Station {name:'A'}), (d:Station {name:'D'}) match stops = (a)-[:next*]->(d) RETURN [x in NODES(stops)| case when x:Station then x.name else ''end] as rastay, REDUCE(d = 0, x IN RELATIONSHIPS(stops) | d + x.Distance) AS distance"
nodes=session.run(query)

arr=[]
resultt=[]
for rel in nodes:  
    # print(rel[0])
    print(rel[1])
    # print(rel)
    # distance.append(rel[0])
    resultt.append(rel[1])
    
 
    count=0
    for result in rel[0]:
        # print(result)
        # count=0
        query="match (bus:Bus{name:'1'}), (s:Station{ name:$result}), p=(bus)-[:stopat]->(s) return p"
        nodess=session.run(query,result=result)
        # print(nodess)
        for rell in nodess:
            # print(rell)
            if rell!=None:
                count= count+1


        # if nodess!=None:
        #    count= count+1

    # print(rel[1])
    # print(rel[2])
    print("------------------------------")
    arr.append(count) 
    #    
        # for r in result:
        #     print(r)


#print(rel[0])
print(arr)
print(arr.index(max(arr)))
print(resultt[arr.index(max(arr))]) # distance a raah hay jo select kea hay us ka