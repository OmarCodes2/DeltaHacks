import random
import string
# 0Name 1ID 2Email

# DealBreakers
# 3GenderPref 4Gender 5Pet 6AlcoholPref 7Alcohol 8SmokePref 9Smoke 10WeedPref 11Weed 12VapePref 13Vape  15#PeoplePref 16#People

# Lifestyle
# 14Money 17Faculty 18Program 19Year 20WakingHours 21SleepHours 22Cleaning 23WhatTheyWantFromRoomate 24Cooking 25Guest 26GuestPref

exampleData = []
letters = string.ascii_lowercase
for i in range(10):
  exampleData.append([''.join(random.choice(letters) for i in range(5)), ''.join(random.choice(letters) for i in range(5)), ''.join(random.choice(letters) for i in range(5)), 0, 0, 0, 0, 0, 0, 0, 0, 0, random.randint(0,1),random.randint(0,1), random.randint(0,4), 1, 1, "Engineering", "Software Engineering", random.randint(0,4), random.randint(0,3), random.randint(0,2), random.randint(0,2), random.randint(0,2), random.randint(0,2), random.randint(0,2), random.randint(0,2)])


#Calculates Compatibility between 2 people
def compatibility(p1, p2):
  #Dealbreakers:
  #Gender
  if p1[3] == 0 and p2[4] != p1[4]:
    return 0
  if p2[3] == 0 and p2[4] != p1[4]:
    return 0
  
  #PetPref
  if p1[5] != p2[5]:
    return 0
  
  #Alcohol
  if p1[6] == 0 and p2[7] == 1:
    return 0
  if p2[6] == 0 and p1[7] == 1:
    return 0
  
  #Tobacco
  if p1[8] == 0 and p2[9] == 1:
    return 0
  if p2[8] == 0 and p1[9] == 1:
    return 0

  #Weed
  if p1[10] == 0 and p2[11] == 1:
    return 0
  if p2[10] == 0 and p1[11] == 1:
    return 0

  #Vape
  if p1[12] == 0 and p2[13] == 1:
    return 0
  if p2[12] == 0 and p1[13] == 1:
    return 0
  
  #Lifestyle
  sum = 0.0
  total = 8 + 3 + 1 + 4 + 6 + 4 + 4 + 8 + 2 + 4
  
  #money
  sum += 8 - 2 * abs(p1[14] - p2[14])

  #Faculty/Program
  if p1[17] == p2[17]:
    sum += 3
  if p1[18] == p2[18]:
    sum += 1

  #Year
  sum += 4 - abs(p1[19] - p2[19])

  #Waking Hours
  sum += 6 - 2 * abs(p1[20] - p2[20])

  #Sleep Hours
  sum += 4 - 2 * abs(p1[21] - p1[21])

  #Cleaning
  sum += 4 - 2 * abs(p1[22] - p2[22])

  #Roommate
  sum += 8 - 4 * abs(p1[23] - p2[23])

  #Cooking
  sum += 2 - abs(p1[24] - p2[24])

  #Guest Pref
  sum += 2 - abs(p1[26] - p2[25]) + 2 - abs(p1[25] - p2[26])

  return int(sum/total * 100)


p1 = ["Jason", "000000000000", "shuaihangtang@gmail.com", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, "Eng", "Chem Eng", 2, 0, 0, 0, 0, 0, 0, 0]
p2 = ["Omar", "000000000001", "1bakromar@gmail.com", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, "Eng", "Soft Eng", 2, 0, 0, 2, 0, 1, 0, 0]

#print(compatibility(p1, p2))



list = exampleData #list of everyone

list1 = [] # list of all ones
for i in list:
  if i[15] == 1 & i[16] == 1:
    list1.append(i)
list11 = list1[:len(list1)//2] #first list of 1's
list11pref = [[] for i in range(len(list11))]
list12 = list1[len(list1)//2:] #second list of 1's
list12pref = [[] for i in range(len(list12))]

list2 = [] #list of all twos
for i in list:
  if i[15] == 1 & i[16] == 1:
    list1.append(i)
list21 = list2[:len(list2)//2] #first list of 2's
list21pref = [[] for i in range(len(list21))]
list22 = list2[len(list1)//2:] #second list of 2's
list22pref = [[] for i in range(len(list22))]

list2_1 = []  #2 looking for 1
for i in list:
  if i[15] == 1 & i[16] == 2:
    list2_1.append(i)
list2_1pref = [[] for i in range(len(list2_1))]
list1_2 = [] #1 looking for 2
for i in list:
  if i[15] == 2 & i[16] == 1:
    list2_1.append(i)
list1_2pref = [[] for i in range(len(list1_2))]

#run compatibility for each person
def everyComp(list1, list1pref, list2, list2pref):
  for i in range(len(list1)):
    for j in range(len(list2)):
      list1pref[i].append([j, list2[j][1], compatibility(list1[i], list2[j])])
      list2pref[j].append([i, list1[i][1], compatibility(list1[i], list2[j])])

everyComp(list11, list11pref, list12, list12pref)
everyComp(list21, list21pref, list22, list22pref)
everyComp(list1_2, list1_2pref, list2_1, list2_1pref)

#Sort compatibility for every person
def sortComp(list1):
  for i in range(len(list1)):
    list1[i].sort(key = lambda x: x[1], reverse=True)

sortComp(list11pref)
sortComp(list12pref)
sortComp(list21pref)
sortComp(list22pref)
sortComp(list1_2pref)
sortComp(list2_1pref)

#Turn the compatibility lists into list of numbers
def convertToProcess(list):
  process = [[] for i in range(len(list))]
  for i in range(len(list)):
    for j in range(len(list[i])):
      process[i].append(list[i][j][0])
  return process

list11pro = convertToProcess(list11pref)
list12pro = convertToProcess(list12pref)
list21pro = convertToProcess(list21pref)
list22pro = convertToProcess(list22pref)
list2_1pro = convertToProcess(list2_1pref)
list1_2pro = convertToProcess(list1_2pref)

#Run Gale-Shapely Algorithm
def galeShapelyAlg(n, pref1, pref2):
  unMatched = [i for i in range(n)]
  match12 = [None for i in range(n)]
  match21 = [None for i in range(n)]
  nextChoice = [0 for i in range(n)]

  while(unMatched):
    p1 = unMatched[0]
    p1Pref = pref1[p1]
    p2 = p1Pref[nextChoice[p1]]
    p2Pref = pref2[p2]
    current = match21[p2]

    if current == None:
      match21[p2] = p1
      match12[p1] = p2
      nextChoice[p1] = nextChoice[p1] + 1
      unMatched.pop(0)
    else:
      i = p2Pref.index(current)
      p1Index = p2Pref.index(p1)

      if i > p1Index:
        match21[p2] = p1
        match12[p1] = p2
        nextChoice[p1] = nextChoice[p1] + 1
        unMatched.pop(0)
        unMatched.insert(0, current)
      else:
        nextChoice[p1] = nextChoice[p1] + 1
  return match12

match11 = galeShapelyAlg(len(list11), list11pro, list12pro)
match22 = galeShapelyAlg(len(list21), list21pro, list22pro)
match21 = galeShapelyAlg(len(list2_1), list2_1pro, list1_2pro)

print(match11)
for i in range(len(match11)):
  print(list11[i][2], list12[match11[i]][2])