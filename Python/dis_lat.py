import math

R = 6373.0

lat1 = math.radians(24.9093) # liaquatabad
lon1 = math.radians(67.0494)

#lat1 = math.radians(24.9195) # karemabad chowrangi
#lon1 = math.radians(67.0591)             #1.498 km

lat2= math.radians(24.9273)  # ayeshmanzil
lon2=math.radians(67.0646)        # 2.522 km (liaquatabad)        # karemabad say aishamanzil 1.03

dlon = lon2 - lon1
dlat = lat2 - lat1


#Haversine_formula for distance
a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
distance = R * c

print(round(distance,3))
print(distance)





