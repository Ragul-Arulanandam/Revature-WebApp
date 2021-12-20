# #!/usr/bin/ruby

# # puts "Hello Ruby!"


# # BEGIN {
# #     puts "Execute first!"    
# # }
# # END{
# #     puts "Execute End!"
# # }

# =begin ashdhkhsa
# sdkfaksd
# =end


# lobal_variable = 10
# class Class1
#    def print_global
#       puts "Global variable in Class1 is #global_variable"
#    end
# end
# class Class2
#    def print_global
#       puts "Global variable in Class2 is #global_variable"
#    end
# end

# class1obj = Class1.new
# class1obj.print_global
# class2obj = Class2.new
# class2obj.print_global

# MR_COUNT = 0         # constant defined on main Object class
# module Foo
#    MR_COUNT = 0
#    ::MR_COUNT = 1    # set global count to 1
#    MR_COUNT = 2      # set local count to 2
# end
# puts MR_COUNT        # this is the global constant
# puts Foo::MR_COUNT   # this is the local "Foo" constant
# CONST = ' out there'
# class Inside_one
#    CONST = proc {' in there'}
#    def where_is_my_CONST
#       ::CONST + ' inside one'
#    end
# end
# class Inside_two
#    CONST = ' inside two'
#    def where_is_my_CONST
#       CONST
#    end
# end
# puts Inside_one.new.where_is_my_CONST
# puts Inside_two.new.where_is_my_CONST
# puts Object::CONST + Inside_two::CONST
# puts Inside_two::CONST + CONST
# puts Inside_one::CONST
# puts Inside_one::CONST.call + Inside_two::CONST

x = 1
if x > 2
   puts "x is greater than 2"
elsif x >= 2 and x!=0
   puts "x is 1"
else
   puts "I can't guess the number"
end
