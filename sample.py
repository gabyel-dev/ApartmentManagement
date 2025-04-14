class Person:
    def __init__(self, name: str):
        self.name = name
        
def getname(one_person: Person):
        return one_person.name

p = Person('hey')
print(getname(p))
