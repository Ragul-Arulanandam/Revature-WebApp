#!/usr/bin/ruby

#GlobalVariables

# $initialValue=7
# class MainClass
#     def subClassOne
#         puts "Global Variable in this class #$initialValue"
#     end
# end

# class MainClass2
#     def subClassTwo
#         puts "Global variable in this class #$initialValue"
#     end
# end


# obj1 = MainClass.new
# obj1.subClassOne

# obj2 = MainClass2.new
# obj2.subClassTwo

#InstanceVariables

# class Customers
#     @@no_of_customers = 0   #ClassVariables
#     def initialize(id,name,address)
#         @customer__id = id    #instanceVariables
#         @customer__name = name 
#         @customer__address = address
#     end

#     def displayValues()
#         puts "Custome Id #@customer__id"
#         puts "Custome Name #@customer__name"
#         puts "Custome Addreess #@customer__address"
#     end
#     def totalCustomers()
#         @@no_of_customers += 1  #TheClassVariable which is used.
#         puts "Total Customers: #@@no_of_customers"
#     end
# end   

# #objectCreation
# customer1 = Customers.new("1","Ragul","Kanchipuram")
# customer2 = Customers.new("2","Larika","Trichy")
# customer3 = Customers.new("2","Larika","Trichy")
# customer4 = Customers.new("2","Larika","Trichy")
# customer5 = Customers.new("2","Larika","Trichy")



# #callMethods
# customer1.displayValues()
# customer1.totalCustomers()
# puts"----------------------------------"
# customer2.displayValues()
# customer3.totalCustomers()
# puts"----------------------------------"
# customer4.totalCustomers()
# puts"----------------------------------"
# customer5.totalCustomers()
