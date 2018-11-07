class Cart < ApplicationRecord
  has_many :cart_items
  has_many :items, through: :cart_items

  def self.get_daily_merch_sales
    # define array that will contain all date hashes
    data = []

    # make an array of all dates associated with carts
    dates = []
    Cart.all.each do |cart|
      dates << cart.date
    end

    # filter out the dates that are the same
    dates.uniq!

    # for each date find all carts associated
    dates.each do |date, i|
      carts = Cart.all.select do |cart|
        date == cart.date
      end

      # declare variables for daily report info
      wholesale_total = 0
      total = 0
      square_total = 0

      # once all carts are organized by date, add up values
      carts.each do |cart|
        total += cart.total
        wholesale_total += cart.wholesale_total
        square_total += cart.square_total
      end
      # add values to a data hash per date
      date_hash = {}
      date_hash[:date] = date
      date_hash[:total] = total
      date_hash[:wholesale_total] = wholesale_total
      date_hash[:square_total] = square_total

      # push daily values into data array
      data << date_hash


    end

    data
  end
end
