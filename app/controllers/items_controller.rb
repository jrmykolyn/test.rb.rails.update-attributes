class ItemsController < ApplicationController


    def index
        @items = Item.all
    end


    def update
        item = Item.find( params[ :id ] )

        # Handle diff. request types:
        respond_to do | format |
            format.js do
                # Set `preferred` equal to opposite boolean val.
                item.preferred = !item.preferred
                item.save

                # Return new boolean value as plain text.
                render ( { :plain => item.preferred.to_s } )
            end
        end
    end # /update

end
