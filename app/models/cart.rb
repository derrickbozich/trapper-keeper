class Cart < ApplicationRecord
  has_many :cart_items
  has_many :items, through: :cart_items

  def self.get_daily_merch_sales
    # define array that will contain all date hashes
    data = []
    # make an array of all dates associated with carts
    dates = []
    Cart.all.each do |cart|
      d = cart.date
      dates << d
    end
    # filter out the dates that are the same
    dates.uniq!
    # for each date find all carts associated
    dates.each do |date|
      carts = Cart.all.select do |cart|
        date == cart.date
      end

      # declare variables for daily report info
      wholesale_total = 0
      total = 0
      square_total = 0
      # declare an empty array to put all items sold on a particular date in
      items_sold = []
      # now that carts are grouped by date, add up values,
      # and push sold items onto an array
      carts.each do |cart|
        total += cart.total
        wholesale_total += cart.wholesale_total
        square_total += cart.square_total
        items_sold << cart.items
      end




      sold_items_count = []
      Item.all.each do |item|
        count = 0
        items_sold.flatten.each do |item_sold|
          if item_sold.id == item.id
            count += 1
          end
        end
        sold_items_count << count
      end








      # add values to a data hash per date
      date_hash = {}
      date_hash[:date] = date
      date_hash[:total] = total
      date_hash[:wholesale_total] = wholesale_total
      date_hash[:square_total] = square_total
      date_hash[:sold_items_count] = sold_items_count

      # push daily values into data array
      data << date_hash
    end
    data
  end

  def self.calc_merch
    total = 0
    wholesale_total = 0
    square_total = 0
    Cart.all.each do |cart|
      total += cart.total
      wholesale_total += cart.wholesale_total
      square_total += cart.square_total
    end
    net_merch = total - wholesale_total - square_total
    {gross_merch: total, net_merch: net_merch, wholesale_total: wholesale_total, square_total: square_total}
  end
end
