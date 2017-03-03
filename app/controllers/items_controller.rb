class ItemsController < ApplicationController


    def index
        @items = Item.all
    end

    
    def update
        # DO THE THING!
    end

end
