class Show < ApplicationRecord
  def self.calc_door
    gross_door = 0
    booking_fee = 0
    net_door = 0
    Show.all.each do |show|
      gross_door += show.door_deal
    end
    booking_fee = (gross_door * 0.10).to_i
    net_door = (gross_door - booking_fee).to_i
    {gross_door: gross_door, net_door: net_door, booking_fee: booking_fee}
  end
end
