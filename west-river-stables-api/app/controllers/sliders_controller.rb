class SlidersController < ApplicationController
  def index
      @sliders = Slider.all
      render json: @sliders
  end

  def create
      @Slider = Slider.create(slider_params)
  end

  private
  def slider_params
      params.permit(:image, :caption)
  end
end