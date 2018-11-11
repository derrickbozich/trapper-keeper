class Show < ApplicationRecord
  belongs_to :user

  def self.calc_door(id)
    @current_user = User.find_by_id(id)
    gross_door = 0
    booking_fee = 0
    net_door = 0
    @current_user.shows.each do |show|
      gross_door += show.door_deal
    end
    booking_fee = (gross_door * 0.10).to_i
    net_door = (gross_door - booking_fee).to_i
    {gross_door: gross_door, net_door: net_door, booking_fee: booking_fee}
  end
end
